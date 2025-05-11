import { expectType } from 'tsd';
import icons from './index';

// check all icons are string
type IconKeys = keyof typeof icons;
declare const key: IconKeys;
expectType<string>(icons[key]);

console.log('✅ All icon keys are correctly typed as strings.');
