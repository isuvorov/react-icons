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

var MdLocalGasStation = function (_React$Component) {
    _inherits(MdLocalGasStation, _React$Component);

    function MdLocalGasStation() {
        _classCallCheck(this, MdLocalGasStation);

        return _possibleConstructorReturn(this, (MdLocalGasStation.__proto__ || Object.getPrototypeOf(MdLocalGasStation)).apply(this, arguments));
    }

    _createClass(MdLocalGasStation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 16.6q0.7 0 1.2-0.4t0.4-1.2-0.4-1.2-1.2-0.4-1.2 0.4-0.4 1.2 0.4 1.2 1.2 0.4z m-10 0v-8.2h-10v8.2h10z m13-4.6q1.1 1.2 1.1 3v15.9q0 1.7-1.2 2.9t-2.9 1.2-2.9-1.2-1.2-2.9v-8.4h-2.5v12.5h-16.8v-26.6q0-1.4 1.1-2.4t2.3-1h10q1.3 0 2.3 1t1.1 2.4v11.6h1.6q1.3 0 2.3 1t1.1 2.4v7.5q0 0.7 0.4 1.1t1.2 0.5 1.2-0.5 0.4-1.1v-12.1q-0.7 0.3-1.6 0.3-1.7 0-2.9-1.2t-1.2-2.9q0-2.8 2.6-3.9l-3.5-3.5 1.8-1.7z' })
                )
            );
        }
    }]);

    return MdLocalGasStation;
}(React.Component);

exports.default = MdLocalGasStation;
module.exports = exports['default'];