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

var TiKey = function (_React$Component) {
    _inherits(TiKey, _React$Component);

    function TiKey() {
        _classCallCheck(this, TiKey);

        return _possibleConstructorReturn(this, (TiKey.__proto__ || Object.getPrototypeOf(TiKey)).apply(this, arguments));
    }

    _createClass(TiKey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.2 18.3c0 1.3 0.2 2.4 0.7 3.5l-6.6 6.5v2.5s1.5 2.5 3.4 2.5h3.3v-3.3h3.3v-3.3h4.2c4.6 0 8.3-3.8 8.3-8.4s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3z m8.3 3.4c-1.8 0-3.3-1.5-3.3-3.4 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.9-1.5 3.4-3.3 3.4z' })
                )
            );
        }
    }]);

    return TiKey;
}(React.Component);

exports.default = TiKey;
module.exports = exports['default'];