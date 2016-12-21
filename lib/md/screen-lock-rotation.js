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

var MdScreenLockRotation = function (_React$Component) {
    _inherits(MdScreenLockRotation, _React$Component);

    function MdScreenLockRotation() {
        _classCallCheck(this, MdScreenLockRotation);

        return _possibleConstructorReturn(this, (MdScreenLockRotation.__proto__ || Object.getPrototypeOf(MdScreenLockRotation)).apply(this, arguments));
    }

    _createClass(MdScreenLockRotation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28 4.1v0.9h5.7v-0.9q0-1.1-0.8-2t-2-0.8-2.1 0.8-0.8 2z m-1.4 10.9q-0.7 0-1.1-0.5t-0.5-1.1v-6.8q0-0.7 0.5-1.1t1.1-0.5v-0.9q0-1.7 1.3-2.9t3-1.2 2.9 1.2 1.2 2.9v0.9q0.7 0 1.2 0.5t0.4 1.1v6.8q0 0.7-0.4 1.1t-1.2 0.5h-8.4z m-12.5 19.1l2.2-2.1 6.4 6.3-1.1 0.1q-7.8 0-13.6-5.4t-6.4-13h2.5q0.5 4.6 3.2 8.4t6.8 5.7z m24.7-12.8q0.7 0.7 0.7 1.7t-0.7 1.8l-10.7 10.6q-0.7 0.8-1.7 0.8t-1.8-0.8l-20-20q-0.8-0.7-0.8-1.7t0.8-1.8l10.6-10.6q0.7-0.8 1.7-0.8t1.8 0.8l4.1 4-2.3 2.4-3.5-3.5-9.5 9.4 18.9 18.9 9.4-9.4-3.7-3.7 2.4-2.4z' })
                )
            );
        }
    }]);

    return MdScreenLockRotation;
}(React.Component);

exports.default = MdScreenLockRotation;
module.exports = exports['default'];