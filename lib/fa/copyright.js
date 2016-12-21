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

var FaCopyright = function (_React$Component) {
    _inherits(FaCopyright, _React$Component);

    function FaCopyright() {
        _classCallCheck(this, FaCopyright);

        return _possibleConstructorReturn(this, (FaCopyright.__proto__ || Object.getPrototypeOf(FaCopyright)).apply(this, arguments));
    }

    _createClass(FaCopyright, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.7 24v2.4q0 1.1-0.8 2t-2.1 1.3-2.7 0.8-2.6 0.2q-4.6 0-7.6-3.1t-3.1-7.7q0-4.5 3-7.6t7.6-3q0.7 0 1.7 0.1t2 0.4 2.1 0.7 1.6 1.3 0.6 1.8v2.4q0 0.4-0.4 0.4h-2.6q-0.4 0-0.4-0.4v-1.5q0-1-1.4-1.5t-3.1-0.6q-3.1 0-5.1 2.1t-2 5.3q0 3.3 2.1 5.5t5.2 2.2q1.5 0 3.1-0.5t1.5-1.5v-1.5q0-0.2 0.1-0.3t0.3-0.1h2.6q0.1 0 0.3 0.1t0.1 0.3z m-8.6-18.3q-2.9 0-5.5 1.2t-4.6 3-3 4.6-1.1 5.5 1.1 5.5 3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5-1.1-5.5-3.1-4.6-4.5-3.1-5.6-1.1z m17.2 14.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaCopyright;
}(React.Component);

exports.default = FaCopyright;
module.exports = exports['default'];