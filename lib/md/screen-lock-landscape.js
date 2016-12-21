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

var MdScreenLockLandscape = function (_React$Component) {
    _inherits(MdScreenLockLandscape, _React$Component);

    function MdScreenLockLandscape() {
        _classCallCheck(this, MdScreenLockLandscape);

        return _possibleConstructorReturn(this, (MdScreenLockLandscape.__proto__ || Object.getPrototypeOf(MdScreenLockLandscape)).apply(this, arguments));
    }

    _createClass(MdScreenLockLandscape, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18 16.6v1.8h4v-1.8q0-0.7-0.6-1.3t-1.4-0.6-1.4 0.6-0.6 1.3z m-1.4 10q-0.7 0-1.1-0.4t-0.5-1.2v-5q0-0.7 0.5-1.2t1.1-0.4v-1.8q0-1.3 1-2.3t2.4-0.9 2.4 0.9 1 2.3v1.8q0.7 0 1.1 0.4t0.5 1.2v5q0 0.7-0.5 1.2t-1.1 0.4h-6.8z m15 1.8v-16.8h-23.2v16.8h23.2z m3.4-20q1.3 0 2.3 0.9t1.1 2.3v16.8q0 1.3-1.1 2.3t-2.3 0.9h-30q-1.3 0-2.3-0.9t-1.1-2.3v-16.8q0-1.3 1.1-2.3t2.3-0.9h30z' })
                )
            );
        }
    }]);

    return MdScreenLockLandscape;
}(React.Component);

exports.default = MdScreenLockLandscape;
module.exports = exports['default'];