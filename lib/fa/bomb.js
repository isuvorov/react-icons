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

var FaBomb = function (_React$Component) {
    _inherits(FaBomb, _React$Component);

    function FaBomb() {
        _classCallCheck(this, FaBomb);

        return _possibleConstructorReturn(this, (FaBomb.__proto__ || Object.getPrototypeOf(FaBomb)).apply(this, arguments));
    }

    _createClass(FaBomb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.7 13.1q-0.2-0.5-0.7-0.7t-1.1 0q-2.4 0.9-4.3 2.8t-2.8 4.3q-0.2 0.5 0 1.1t0.8 0.7q0.3 0.1 0.5 0.1 1 0 1.4-0.9 0.7-1.8 2.2-3.3t3.3-2.2q0.5-0.2 0.7-0.8t0-1.1z m21.1-7.9l1 1-5.4 5.5 1.5 1.5q0.4 0.4 0.4 1t-0.4 1l-1.5 1.4q2 3.6 2 7.7 0 3.2-1.2 6.1t-3.4 5-5 3.4-6.1 1.2-6.1-1.2-5-3.4-3.4-5-1.2-6.1 1.2-6.1 3.4-5 5-3.4 6.1-1.2q4.1 0 7.7 2l1.4-1.5q0.4-0.4 1-0.4t1 0.4l1.6 1.6z m0.2-1.2q-0.3 0.2-0.5 0.2-0.3 0-0.6-0.2l-2-2.1q-0.2-0.2-0.2-0.5t0.2-0.5q0.2-0.2 0.5-0.2t0.5 0.2l2.1 2q0.2 0.2 0.2 0.5t-0.2 0.5z m5.1 5.1q-0.3 0.2-0.5 0.2t-0.5-0.2l-2.1-2q-0.2-0.2-0.2-0.5t0.2-0.5q0.2-0.3 0.6-0.3t0.5 0.3l2 2q0.2 0.2 0.2 0.5t-0.2 0.5z m0.9-4.1q0 0.3-0.2 0.5t-0.5 0.2h-2.2q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2h2.2q0.3 0 0.5 0.2t0.2 0.5z m-4.3-4.3v2.2q0 0.3-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5v-2.2q0-0.3 0.2-0.5t0.5-0.2 0.5 0.2 0.2 0.5z m3.4 1.2l-2 2.1q-0.3 0.2-0.5 0.2-0.3 0-0.6-0.2-0.2-0.2-0.2-0.5t0.2-0.6l2.1-2q0.2-0.2 0.5-0.2t0.5 0.2q0.2 0.2 0.2 0.5t-0.2 0.5z' })
                )
            );
        }
    }]);

    return FaBomb;
}(React.Component);

exports.default = FaBomb;
module.exports = exports['default'];