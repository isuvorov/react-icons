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

var IoAndroidFilm = function (_React$Component) {
    _inherits(IoAndroidFilm, _React$Component);

    function IoAndroidFilm() {
        _classCallCheck(this, IoAndroidFilm);

        return _possibleConstructorReturn(this, (IoAndroidFilm.__proto__ || Object.getPrototypeOf(IoAndroidFilm)).apply(this, arguments));
    }

    _createClass(IoAndroidFilm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.4 5h3.1v30h-3.1v-3.4h-3.1v3.4h-12.5v-3.4h-3.2v3.4h-3.1v-30h3.1v3.4h3.2v-3.4h12.5v3.4h3.1v-3.4z m-15.6 23.4v-3.4h-3.2v3.4h3.2z m0-6.8v-3.2h-3.2v3.2h3.2z m0-6.6v-3.4h-3.2v3.4h3.2z m15.6 13.4v-3.4h-3.1v3.4h3.1z m0-6.8v-3.2h-3.1v3.2h3.1z m0-6.6v-3.4h-3.1v3.4h3.1z' })
                )
            );
        }
    }]);

    return IoAndroidFilm;
}(React.Component);

exports.default = IoAndroidFilm;
module.exports = exports['default'];