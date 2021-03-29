/**
 * Promise based wrapper around Browsers IndexedDB
 */
class IDB<T> {
  protected readonly dbName: string;
  protected readonly dbVersion: number;

  constructor(dbName: string, version: number = 1) {
    this.dbName = dbName;
    this.dbVersion = version;
  }

  /**
   * Gets the value at a given index.
   */
  get(id: string): Promise<T> {
    const storeName = this.dbName;
    const storeVersion = this.dbVersion;
    return new Promise(function (resolve, reject) {
      var dbRequest = indexedDB.open(storeName, storeVersion);

      dbRequest.onerror = function (e) {
        reject(e);
      };

      dbRequest.onupgradeneeded = function (event) {
        // Objectstore does not exist. Nothing to load
        (<any>event.target).transaction.abort();
        reject(Error("Not found"));
      };

      dbRequest.onsuccess = function (event) {
        const database = (<any>event.target).result;
        const transaction = database.transaction([storeName]);
        const objectStore = transaction.objectStore(storeName);
        const objectRequest = <IDBRequest<IDBCursorWithValue>>(
          objectStore.get(id)
        );

        objectRequest.onerror = function (e) {
          reject(e);
        };

        objectRequest.onsuccess = function () {
          if (objectRequest.result) {
            resolve(objectRequest.result.value);
          } else reject(Error("object not found"));
        };
      };
    });
  }

  /**
   * Iterates through the table using a given callback function.
   */
  select(
    callback: (cursor: IDBCursorWithValue) => void
    // ,where?: string
  ): Promise<void> {
    const storeName = this.dbName;
    const storeVersion = this.dbVersion;
    return new Promise(function (resolve, reject) {
      const dbRequest = indexedDB.open(storeName, storeVersion);

      dbRequest.onerror = function (e) {
        reject(e);
      };

      dbRequest.onupgradeneeded = function (event) {
        // Objectstore does not exist. Nothing to load
        (<any>event.target).transaction.abort();
        reject(Error("Not found"));
      };

      dbRequest.onsuccess = function (event) {
        var database = (<any>event.target).result;
        var transaction = database.transaction([storeName]);
        var objectStore = transaction.objectStore(storeName);
        const objectRequest = <IDBRequest<IDBCursorWithValue>>(
          objectStore.openCursor()
        );

        objectRequest.onerror = function () {
          // reject(e);
        };

        objectRequest.onsuccess = function (ev) {
          if (objectRequest.result) {
            const cursor = <IDBCursorWithValue>(<any>ev.target).result;
            if (cursor) {
              callback(cursor.value);
              resolve();
              cursor.continue();
            }
          }
          // else {
          //   reject(Error("object not found"));
          // }
        };
      };
    });
  }

  /**
   * Tries to delete a data at a given id.
   * @returns true if successful and false if not.
   */
  delete(id: string): Promise<boolean> {
    const storeName = this.dbName;
    const storeVersion = this.dbVersion;
    return new Promise(function (resolve, reject) {
      var dbRequest = indexedDB.open(storeName, storeVersion);

      dbRequest.onerror = function (e) {
        reject(e);
      };

      dbRequest.onupgradeneeded = function (event) {
        // Objectstore does not exist. Nothing to load
        (<any>event.target).transaction.abort();
        reject(Error("Not found"));
      };

      dbRequest.onsuccess = function (event) {
        var database = (<any>event.target).result;
        var transaction = database.transaction([storeName], "readwrite");
        var objectStore = transaction.objectStore(storeName);
        var objectRequest = <IDBRequest<IDBCursorWithValue>>(
          objectStore.delete(id)
        );

        objectRequest.onerror = function () {
          resolve(false);
        };

        objectRequest.onsuccess = function () {
          resolve(true);
        };
      };
    });
  }

  /**
   * Sets the value at a given id.
   */
  set(id: string, value: T): Promise<void> {
    const object = JSON.parse(
      `{"id":"${id}","value":${JSON.stringify(value)}}`
    );
    const storeName = this.dbName;
    const storeVersion = this.dbVersion;
    return new Promise(function (resolve, reject) {
      if (!object.id) {
        reject(Error("object has no id."));
      }
      var dbRequest = indexedDB.open(storeName, storeVersion);

      dbRequest.onerror = function () {
        reject(Error("IndexedDB database error"));
      };

      dbRequest.onupgradeneeded = function (event) {
        var database = (<any>event.target).result;
        database.createObjectStore(storeName, {
          keyPath: "id",
        });
      };

      dbRequest.onsuccess = function (event) {
        var database = (<any>event.target).result;
        var transaction = database.transaction([storeName], "readwrite");
        var objectStore = transaction.objectStore(storeName);
        var objectRequest = <IDBRequest<IDBCursorWithValue>>(
          objectStore.put(object)
        ); // Overwrite if exists

        objectRequest.onerror = function (e) {
          reject(e);
        };

        objectRequest.onsuccess = function () {
          resolve();
        };
      };
    });
  }

  /**
   * Updates the value of a given key and id in the table.
   * @param id of the table
   * @param key of the value object
   * @param newValue of the object at the given key
   */
  update<K extends keyof T, V extends T[K]>(
    id: string,
    key: K,
    newValue: V
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.get(id)
        .then((obj) => {
          obj[key] = newValue;
          this.set(id, obj).then(resolve).catch(reject);
        })
        .catch(reject);
    });
  }
}
