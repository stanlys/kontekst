import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Метод для сохранения данных
  public setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  // Метод для извлечения данных
  public getItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) as T : null;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  }

  // Метод для удаления данных
  public removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error deleting from localStorage', error);
    }
  }

  // Метод для очистки всех данных
  public clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }
}
