import type { NonFunctionPropertyNames } from '@/types/private-types';
import type { IGameObject } from '../game-object';

export interface IDependency<TDependency extends IGameObject | unknown> {
  /**
   * The dependent. Usually matches the id or name of the game object that comes
   * with the dependency.
   */
  dependent: string;
  /**
   * The name of the game object that is being depended on.
   */
  dependencyName: string;
  /**
   * The property key of the game object that needs to be checked. If not provided,
   * the dependency will be checked for existence only.
   */
  key?: keyof Omit<Pick<TDependency, NonFunctionPropertyNames<TDependency>>, 'id' | 'name'>;
  /**
   * The value that the checked property should have. Numbers will be considered as a minimum value.
   * Other types will be checked for equality. `key` must be provided for the value to be checked.
   */
  value?: unknown;
  /**
   * If set to true, the dependency will be considered a conflict if the dependency is met. Conflicts
   * are usually used to prevent certain game objects from being used together. Conflict dependencies
   * simply revert the dependency check, meaning that values of type `number` will be considered a
   * maximum value instead of a minimum value. Existence and equality checks will fail if the dependency
   * is met.
   */
  isConflict?: boolean;
}
