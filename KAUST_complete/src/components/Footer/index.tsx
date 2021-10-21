import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  return (
    <DefaultFooter
      copyright={`2020 ${defaultMessage}`}
      links={[
        {
          key: 'Made by',
          title: 'Made by',
          href: '',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/fwx5618177/',
          blankTarget: true,
        },
        {
          key: 'wenxuan feng',
          title: 'wenxuan feng',
          href: '',
          blankTarget: false,
        },
      ]}
    />
  );
};
