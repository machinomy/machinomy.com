import * as React from 'react';
import './index.css';
export declare type Props = {
    children: Function;
    data: any;
};
export default class Index extends React.Component {
    children: Function;
    data: any;
    constructor(props: Props);
    render(): JSX.Element;
}
export declare const query: void;
