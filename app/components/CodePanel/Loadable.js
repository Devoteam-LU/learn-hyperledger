/**
 *
 * Asynchronously loads the component for CodePanel
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
