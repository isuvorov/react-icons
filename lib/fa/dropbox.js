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

var FaDropbox = function (_React$Component) {
    _inherits(FaDropbox, _React$Component);

    function FaDropbox() {
        _classCallCheck(this, FaDropbox);

        return _possibleConstructorReturn(this, (FaDropbox.__proto__ || Object.getPrototypeOf(FaDropbox)).apply(this, arguments));
    }

    _createClass(FaDropbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9 15.8l11 6.8-7.6 6.3-11-7.1z m22 12.4v2.4l-11 6.5v0l0 0 0 0v0l-10.9-6.5v-2.4l3.3 2.1 7.6-6.3v-0.1l0 0 0 0v0.1l7.7 6.3z m-18.6-25.6l7.6 6.4-11 6.8-7.6-6z m18.6 13.2l7.6 6-10.9 7.2-7.7-6.4z m-3.3-13.2l10.9 7.2-7.6 6-11-6.8z' })
                )
            );
        }
    }]);

    return FaDropbox;
}(React.Component);

exports.default = FaDropbox;
module.exports = exports['default'];