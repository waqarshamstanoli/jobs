import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#8477FA',
            secondary: '#E6E4FE',
            gray:'#787777',
            green:'#D6F6D7',
            darkGreen:'#30D137',
            red:'#F33939',
            orange:'#E4740C'
                
            
          },
        },
      },
});
