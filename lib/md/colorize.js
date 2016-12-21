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

var MdColorize = function (_React$Component) {
    _inherits(MdColorize, _React$Component);

    function MdColorize() {
        _classCallCheck(this, MdColorize);

        return _possibleConstructorReturn(this, (MdColorize.__proto__ || Object.getPrototypeOf(MdColorize)).apply(this, arguments));
    }

    _createClass(MdColorize, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 31.6l13.4-13.4-3.2-3.2-13.4 13.4z m22.9-22.2c0.7 0.6 0.7 1.6 0 2.3l-5.2 5.3 3.2 3.2-2.3 2.3-2.4-2.3-14.9 14.8h-7.9v-7.9l14.8-14.9-2.3-2.4 2.3-2.3 3.3 3.2 5.2-5.2c0.6-0.7 1.7-0.7 2.3 0z' })
                )
            );
        }
    }]);

    return MdColorize;
}(React.Component);

exports.default = MdColorize;
module.exports = exports['default'];