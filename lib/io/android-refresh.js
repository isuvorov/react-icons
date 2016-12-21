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

var IoAndroidRefresh = function (_React$Component) {
    _inherits(IoAndroidRefresh, _React$Component);

    function IoAndroidRefresh() {
        _classCallCheck(this, IoAndroidRefresh);

        return _possibleConstructorReturn(this, (IoAndroidRefresh.__proto__ || Object.getPrototypeOf(IoAndroidRefresh)).apply(this, arguments));
    }

    _createClass(IoAndroidRefresh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 30.3c4.3 0 8.1-2.6 9.6-6.5h3.6c-1.7 5.7-6.9 10-13.2 10-7.7 0-13.8-6.2-13.8-13.8s6.2-13.7 13.8-13.7c3.7 0 7.1 1.5 9.6 4l4.1-4v12h-12l5.4-5.5c-1.8-1.9-4.3-3.1-7.2-3.1-5.6 0-10.3 4.6-10.3 10.3s4.7 10.3 10.4 10.3z' })
                )
            );
        }
    }]);

    return IoAndroidRefresh;
}(React.Component);

exports.default = IoAndroidRefresh;
module.exports = exports['default'];