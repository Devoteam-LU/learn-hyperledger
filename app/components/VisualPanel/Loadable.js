/**
 *
 * Asynchronously loads the component for VisualPanel
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
