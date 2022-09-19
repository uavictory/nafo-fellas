import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      {name: 'fella1'},
      {name: 'fella2'}
    ]
  }
}
