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

var IoAndroidSubway = function (_React$Component) {
    _inherits(IoAndroidSubway, _React$Component);

    function IoAndroidSubway() {
        _classCallCheck(this, IoAndroidSubway);

        return _possibleConstructorReturn(this, (IoAndroidSubway.__proto__ || Object.getPrototypeOf(IoAndroidSubway)).apply(this, arguments));
    }

    _createClass(IoAndroidSubway, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c7.3 0 13.7 0.7 13.7 6.6v16.7c0 3.3-2.6 5.8-5.9 5.8l2.2 2.1v1.3h-20v-1.3l2.1-2.1c-3.3 0-5.9-2.5-5.9-5.8v-16.7c0-5.9 6.4-6.6 13.8-6.6z m-7.5 26.2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m6.2-11.2v-7.5h-8.7v7.5h8.7z m8.8 11.2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m2.5-11.2v-7.5h-8.8v7.5h8.8z' })
                )
            );
        }
    }]);

    return IoAndroidSubway;
}(React.Component);

exports.default = IoAndroidSubway;
module.exports = exports['default'];