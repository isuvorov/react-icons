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

var IoAndroidApps = function (_React$Component) {
    _inherits(IoAndroidApps, _React$Component);

    function IoAndroidApps() {
        _classCallCheck(this, IoAndroidApps);

        return _possibleConstructorReturn(this, (IoAndroidApps.__proto__ || Object.getPrototypeOf(IoAndroidApps)).apply(this, arguments));
    }

    _createClass(IoAndroidApps, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 13.8v-6.3h6.3v6.3h-6.3z m9.4 18.7v-6.2h6.2v6.2h-6.2z m-9.4 0v-6.2h6.3v6.2h-6.3z m0-9.4v-6.2h6.3v6.2h-6.3z m9.4 0v-6.2h6.2v6.2h-6.2z m9.4-15.6h6.2v6.3h-6.2v-6.3z m-9.4 6.3v-6.3h6.2v6.3h-6.2z m9.4 9.3v-6.2h6.2v6.2h-6.2z m0 9.4v-6.2h6.2v6.2h-6.2z' })
                )
            );
        }
    }]);

    return IoAndroidApps;
}(React.Component);

exports.default = IoAndroidApps;
module.exports = exports['default'];