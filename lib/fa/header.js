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

var FaHeader = function (_React$Component) {
    _inherits(FaHeader, _React$Component);

    function FaHeader() {
        _classCallCheck(this, FaHeader);

        return _possibleConstructorReturn(this, (FaHeader.__proto__ || Object.getPrototypeOf(FaHeader)).apply(this, arguments));
    }

    _createClass(FaHeader, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 37.1q-0.9 0-2.9 0t-3-0.1q-1 0-2.9 0.1t-3 0q-0.5 0-0.8-0.4t-0.3-1q0-0.7 0.4-1.1t0.8-0.3 1.2-0.2 1-0.3q0.7-0.5 0.7-3.2l0-8.7q0-0.5 0-0.7-0.3-0.1-1.1-0.1h-15.1q-0.8 0-1.1 0.1-0.1 0.2-0.1 0.7l0 8.3q0 3.2 0.8 3.7 0.4 0.2 1.1 0.2t1.3 0.1 1 0.4 0.4 1q0 0.6-0.2 1t-0.9 0.5q-1 0-3.1 0t-3.1-0.1q-0.9 0-2.8 0.1t-2.9 0q-0.5 0-0.7-0.4t-0.3-1q0-0.7 0.3-1t0.8-0.4 1.1-0.2 0.9-0.3q0.8-0.5 0.8-3.2l-0.1-1.3v-18.1q0-0.1 0.1-0.6t0-0.8-0.1-0.9-0.1-0.9-0.1-0.8-0.3-0.7-0.3-0.4q-0.3-0.3-1-0.3t-1.2-0.1-0.9-0.3-0.4-1q0-0.6 0.3-1t0.8-0.5q1 0 3.1 0t3 0.1q1 0 2.9-0.1t2.8 0q0.6 0 0.8 0.4t0.3 1.1q0 0.7-0.4 1t-0.8 0.3-1.1 0.1-1 0.3q-0.8 0.5-0.8 3.6l0 7.1q0 0.5 0.1 0.7 0.3 0.1 0.8 0.1h15.6q0.6 0 0.9-0.1 0-0.2 0-0.7l0-7.1q0-3.1-0.7-3.6-0.5-0.3-1.4-0.3t-1.4-0.3-0.6-1.1q0-0.6 0.3-1.1t0.8-0.4q1 0 3 0t2.9 0.1q1 0 2.9-0.1t2.9 0q0.5 0 0.8 0.4t0.3 1.1q0 0.7-0.4 1t-0.9 0.3-1.1 0.1-1 0.3q-0.8 0.5-0.8 3.6l0 21q0 2.7 0.8 3.1 0.3 0.3 1 0.3t1.2 0.1 0.9 0.4 0.4 1q0 0.6-0.2 1t-0.9 0.5z' })
                )
            );
        }
    }]);

    return FaHeader;
}(React.Component);

exports.default = FaHeader;
module.exports = exports['default'];