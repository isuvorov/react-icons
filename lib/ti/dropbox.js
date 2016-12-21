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

var TiDropbox = function (_React$Component) {
    _inherits(TiDropbox, _React$Component);

    function TiDropbox() {
        _classCallCheck(this, TiDropbox);

        return _possibleConstructorReturn(this, (TiDropbox.__proto__ || Object.getPrototypeOf(TiDropbox)).apply(this, arguments));
    }

    _createClass(TiDropbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 21.5l8.8 5.8 6.2-5.1-8.8-5.5z m8.8-15.5l-8.8 5.8 6.2 4.9 8.8-5.5z m21.2 5.8l-8.8-5.8-6.2 5.2 8.8 5.5z m-15 10.4l6.2 5.1 8.8-5.8-6.2-4.8z m0 2l-6.2 5.1-2.6-1.8v2l8.8 5.3 8.8-5.3v-2l-2.6 1.8z' })
                )
            );
        }
    }]);

    return TiDropbox;
}(React.Component);

exports.default = TiDropbox;
module.exports = exports['default'];