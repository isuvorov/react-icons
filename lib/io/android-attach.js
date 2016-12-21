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

var IoAndroidAttach = function (_React$Component) {
    _inherits(IoAndroidAttach, _React$Component);

    function IoAndroidAttach() {
        _classCallCheck(this, IoAndroidAttach);

        return _possibleConstructorReturn(this, (IoAndroidAttach.__proto__ || Object.getPrototypeOf(IoAndroidAttach)).apply(this, arguments));
    }

    _createClass(IoAndroidAttach, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.9 10h2.5v18.4c0 5-4.2 9.1-9.3 9.1s-9.1-4.1-9.1-9.1v-19.3c0-3.6 3-6.6 6.6-6.6s6.8 3 6.8 6.6v19.3c0 2.3-1.9 4.1-4.3 4.1s-4.1-1.8-4.1-4.1v-15.9h2.5v15.9c0 0.9 0.7 1.6 1.6 1.6s1.8-0.7 1.8-1.6v-19.3c0-2.3-1.9-4.1-4.3-4.1s-4.1 1.8-4.1 4.1v19.3c0 3.6 3 6.6 6.6 6.6s6.8-3 6.8-6.6v-18.4z' })
                )
            );
        }
    }]);

    return IoAndroidAttach;
}(React.Component);

exports.default = IoAndroidAttach;
module.exports = exports['default'];