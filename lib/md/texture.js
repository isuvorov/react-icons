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

var MdTexture = function (_React$Component) {
    _inherits(MdTexture, _React$Component);

    function MdTexture() {
        _classCallCheck(this, MdTexture);

        return _possibleConstructorReturn(this, (MdTexture.__proto__ || Object.getPrototypeOf(MdTexture)).apply(this, arguments));
    }

    _createClass(MdTexture, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.5 35l19.5-19.5v4.7l-14.8 14.8h-4.7z m19.5-3.4c0 1.8-1.6 3.4-3.4 3.4h-3.2l6.6-6.6v3.2z m-26.6-26.6h3.2l-6.6 6.6v-3.2c0-1.8 1.6-3.4 3.4-3.4z m11.4 0h4.7l-19.5 19.5v-4.7z m12.7 0.2c1.2 0.3 2.1 1.1 2.4 2.3l-27.4 27.3c-1.1-0.3-2-1.2-2.3-2.3z' })
                )
            );
        }
    }]);

    return MdTexture;
}(React.Component);

exports.default = MdTexture;
module.exports = exports['default'];