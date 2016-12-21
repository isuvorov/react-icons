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

var MdLooks = function (_React$Component) {
    _inherits(MdLooks, _React$Component);

    function MdLooks() {
        _classCallCheck(this, MdLooks);

        return _possibleConstructorReturn(this, (MdLooks.__proto__ || Object.getPrototypeOf(MdLooks)).apply(this, arguments));
    }

    _createClass(MdLooks, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 10c10.1 0 18.4 8.3 18.4 18.4h-3.4c0-8.3-6.7-15-15-15s-15 6.7-15 15h-3.4c0-10.1 8.3-18.4 18.4-18.4z m0 6.6c6.4 0 11.6 5.4 11.6 11.8h-3.2c0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4h-3.2c0-6.4 5.2-11.8 11.6-11.8z' })
                )
            );
        }
    }]);

    return MdLooks;
}(React.Component);

exports.default = MdLooks;
module.exports = exports['default'];