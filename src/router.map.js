// 总览
import Overview from './views/overview';

// 营运管理
import ManageEcharst from './views/manage/echarst';
import ManageConfig from './views/manage/config';

// 其他应用
import Articls from './views/apps/articls';

// About me
import Myself from './views/myself';

// 组件映射
export const components = {
    overview: <Overview />,
    manage_echarts: <ManageEcharst />,
    manage_config: <ManageConfig />,
    articls: <Articls />,
    myself: <Myself />
}