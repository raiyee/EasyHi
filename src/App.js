import {mapGetters} from 'vuex';

import HiLoading from 'components/HiLoading';
import HiProgress from 'components/HiProgress';

export default {
  computed: {
    ...mapGetters(['progress'])
  },
  render(h) {
    return (
      <div id="app">
        {this.progress ? <HiLoading/> : ''}
        <HiProgress progress={this.progress}/>
        <transition name="bounce">
          <router-view/>
        </transition>
      </div>
    );
  }
};
