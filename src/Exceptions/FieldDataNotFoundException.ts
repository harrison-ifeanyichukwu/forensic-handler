import { Exception } from '.';

export class FieldDataNotFoundException extends Exception {
  /**
   *@param {string} message - error message
   */
  constructor(message: string) {
    super(message, FieldDataNotFoundException);
  }
}
