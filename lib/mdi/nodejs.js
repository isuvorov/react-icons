'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiNodejs = function (_React$Component) {
    _inherits(MdiNodejs, _React$Component);

    function MdiNodejs() {
        _classCallCheck(this, MdiNodejs);

        return _possibleConstructorReturn(this, (MdiNodejs.__proto__ || Object.getPrototypeOf(MdiNodejs)).apply(this, arguments));
    }

    _createClass(MdiNodejs, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,1.85C 11.7288,1.85 11.45,1.91875 11.2163,2.05176L 3.77875,6.3475C 3.29625,6.62625 2.9975,7.14875 2.9975,7.705L 2.9975,16.2888C 2.9975,16.8463 3.29625,17.3687 3.77875,17.6462L 5.7275,18.77C 6.675,19.2337 7.01125,19.2388 7.44125,19.2388C 8.8425,19.2388 9.64875,18.3888 9.64875,16.9138L 9.64875,8.4375C 9.64875,8.32 9.54625,8.2225 9.42875,8.2225L 8.48625,8.2225C 8.36875,8.2225 8.27125,8.32 8.27125,8.4375L 8.27125,16.9138C 8.27125,17.5688 7.5925,18.2175 6.48875,17.6662L 4.45375,16.4887C 4.38,16.45 4.33625,16.3725 4.33625,16.2888L 4.33625,7.705C 4.33625,7.6225 4.38,7.54375 4.45375,7.5L 11.885,3.2125C 11.9537,3.16875 12.0463,3.16875 12.1138,3.2125L 19.5512,7.5C 19.6187,7.54375 19.6625,7.6225 19.6625,7.705L 19.6625,16.2888C 19.6625,16.3725 19.6187,16.45 19.5512,16.4938L 12.1138,20.7863C 12.0512,20.825 11.9537,20.825 11.88,20.7863L 9.975,19.6538C 9.9175,19.6188 9.84375,19.605 9.79,19.6388C 9.2625,19.9363 9.16,19.975 8.6675,20.1462C 8.545,20.19 8.36375,20.2638 8.735,20.4738L 11.2163,21.9438C 11.455,22.08 11.7238,22.1487 11.9975,22.1487C 12.275,22.1487 12.5438,22.08 12.7788,21.9438L 20.22,17.6462C 20.6982,17.3687 21.0013,16.8463 21.0013,16.2888L 21.0013,7.705C 21.0013,7.14875 20.6982,6.63125 20.22,6.3475L 12.7788,2.05176C 12.5487,1.91875 12.275,1.85 12.0025,1.85 Z M 13.9937,7.9975C 11.875,7.9975 10.61,8.89125 10.61,10.39C 10.61,12.0213 11.87,12.4712 13.9063,12.6713C 16.3375,12.91 16.5287,13.2663 16.5287,13.745C 16.5287,14.575 15.86,14.9313 14.2975,14.9313C 12.3238,14.9313 11.895,14.4387 11.7475,13.4575C 11.7338,13.355 11.6412,13.2762 11.5337,13.2762L 10.5713,13.2762C 10.4537,13.2762 10.3563,13.3688 10.3563,13.4913C 10.3563,14.7413 11.04,16.235 14.2975,16.235C 16.65,16.235 18.0025,15.3075 18.0025,13.6862C 18.0025,12.08 16.9188,11.655 14.6288,11.3525C 12.3187,11.045 12.085,10.8887 12.085,10.3462C 12.085,9.8975 12.285,9.30125 13.9937,9.30125C 15.5225,9.30125 16.0888,9.63375 16.3188,10.6638C 16.3375,10.7613 16.4262,10.83 16.5287,10.83L 17.495,10.83C 17.5537,10.83 17.6125,10.8062 17.6513,10.7613C 17.69,10.7175 17.715,10.6587 17.705,10.5962C 17.5587,8.82375 16.3813,7.9975 13.9937,7.9975 Z ' })
                )
            );
        }
    }]);

    return MdiNodejs;
}(React.Component);

exports.default = MdiNodejs;
module.exports = exports['default'];