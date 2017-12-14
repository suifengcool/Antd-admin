import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login'));
app.model(require('./models/main'));
app.model(require('./models/articls'));
app.model(require('./models/manageConfig'));
app.model(require('./models/manageEcharts'));
app.model(require('./models/myself'));
app.model(require('./models/overview'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
