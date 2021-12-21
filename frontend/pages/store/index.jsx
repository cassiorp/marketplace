import { Container } from './styles';
import React, { useEffect, useState } from 'react';
import Template from '../../components/template';
import Card from '../../components/card/index';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../sagas/actions/user';

const Store = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products);
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Template>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Comprar" {...a11yProps(0)} />
            <Tab label="Minhas Compras" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Container>
            {products?.map((product) => (
              <>
                <Card product={product} />
              </>
            ))}
          </Container>
        </TabPanel>
      </Box>
    </Template>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default Store;
