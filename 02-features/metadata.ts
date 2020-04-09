import 'reflect-metadata';

@contoller
class Plane {
  color: string = 'red';

  @get('hi there')
  fly(): void {
    console.log('vrrrrr');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function contoller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
  }
}
