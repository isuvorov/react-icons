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

var FaInstagram = function (_React$Component) {
    _inherits(FaInstagram, _React$Component);

    function FaInstagram() {
        _classCallCheck(this, FaInstagram);

        return _possibleConstructorReturn(this, (FaInstagram.__proto__ || Object.getPrototypeOf(FaInstagram)).apply(this, arguments));
    }

    _createClass(FaInstagram, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 31.8v-14.4h-3q0.4 1.4 0.4 2.9 0 2.8-1.4 5.2t-3.9 3.7-5.3 1.4q-4.4 0-7.6-3t-3.1-7.3q0-1.5 0.5-2.9h-3.2v14.4q0 0.6 0.4 1t1 0.4h23.8q0.6 0 1-0.4t0.4-1z m-6.3-11.9q0-2.7-2.1-4.7t-4.8-1.9q-2.9 0-4.9 1.9t-2 4.7 2 4.8 4.9 1.9q2.8 0 4.8-1.9t2.1-4.8z m6.3-8v-3.7q0-0.6-0.4-1.1t-1.1-0.4h-3.9q-0.7 0-1.1 0.4t-0.5 1.1v3.7q0 0.6 0.5 1.1t1.1 0.4h3.9q0.6 0 1.1-0.4t0.4-1.1z m3.9-4.6v25.4q0 1.9-1.3 3.1t-3.1 1.3h-25.5q-1.8 0-3.1-1.3t-1.3-3.1v-25.4q0-1.9 1.3-3.1t3.1-1.3h25.5q1.8 0 3.1 1.3t1.3 3.1z' })
                )
            );
        }
    }]);

    return FaInstagram;
}(React.Component);

exports.default = FaInstagram;
module.exports = exports['default'];