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

var FaLemonO = function (_React$Component) {
    _inherits(FaLemonO, _React$Component);

    function FaLemonO() {
        _classCallCheck(this, FaLemonO);

        return _possibleConstructorReturn(this, (FaLemonO.__proto__ || Object.getPrototypeOf(FaLemonO)).apply(this, arguments));
    }

    _createClass(FaLemonO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.4 18.4q0-0.9-0.1-2.5t-0.5-2.1q-0.2-0.7-0.3-1t-0.2-0.8-0.1-1.1q0-0.5 0.1-1.6t0.1-1.5q0-0.8-0.2-1.2-0.1 0-0.3 0-0.4 0-1.3 0.1t-1.3 0.1q-1.4 0-4-0.5t-3.9-0.6q-0.9 0-2.1 0.3t-1.9 0.5-2 0.8q-3 1.2-4.5 2.3-2.1 1.6-3.5 4.2t-2 5.3-0.5 5.5q0 0.9 0.2 2.7t0.3 2.7q0 0.5-0.2 1.5t-0.3 1.4 0.3 0.8 0.8 0.4q0.5 0 1.6-0.3t1.6-0.2q1.3 0 3.8 0.3t3.8 0.4q4 0 6.3-0.8 2.9-1 5.3-3.4t3.7-5.5 1.3-6.2z m2.9 0q0 3.7-1.6 7.3t-4.4 6.4-6.2 4.1q-2.8 0.9-7.3 0.9-1.3 0-3.8-0.3t-3.8-0.3q-0.5 0-1.6 0.3t-1.6 0.3q-1.7 0-2.8-1.2t-1.1-2.9q0-0.5 0.2-1.5t0.3-1.5q0-0.9-0.3-2.7t-0.3-2.7q0-2.5 0.4-4.8t1.2-4.7 2.3-4.3 3.3-3.5q1.8-1.3 5.2-2.7 4.3-1.7 7-1.7 1.4 0 4 0.5t3.8 0.5q0.5 0 1.3-0.1t1.3-0.1q1.8 0 2.6 1.1t0.9 3q0 0.5-0.2 1.5t-0.1 1.6q0 0.2 0.1 0.4t0 0.4 0.1 0.3 0.2 0.3 0.1 0.4q0.4 0.9 0.6 2.6t0.2 3.1z' })
                )
            );
        }
    }]);

    return FaLemonO;
}(React.Component);

exports.default = FaLemonO;
module.exports = exports['default'];