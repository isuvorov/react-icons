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

var MdVisibilityOff = function (_React$Component) {
    _inherits(MdVisibilityOff, _React$Component);

    function MdVisibilityOff() {
        _classCallCheck(this, MdVisibilityOff);

        return _possibleConstructorReturn(this, (MdVisibilityOff.__proto__ || Object.getPrototypeOf(MdVisibilityOff)).apply(this, arguments));
    }

    _createClass(MdVisibilityOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 15h0.2c2.7 0 5 2.3 5 5v0.3z m-7.2 1.3c-0.6 1.1-1 2.4-1 3.7 0 4.6 3.8 8.4 8.4 8.4 1.3 0 2.6-0.4 3.7-1l-2.6-2.6c-0.3 0.1-0.7 0.2-1.1 0.2-2.7 0-5-2.3-5-5 0-0.4 0.1-0.8 0.2-1.1z m-9.2-9.2l2.1-2.1 29.5 29.5-2.1 2.1c-1.9-1.8-3.8-3.6-5.6-5.5-2.3 0.9-4.7 1.4-7.3 1.4-8.4 0-15.5-5.2-18.4-12.5 1.4-3.3 3.6-6.1 6.3-8.3-1.5-1.5-3-3.1-4.5-4.6z m16.6 4.5c-1.1 0-2.1 0.3-3 0.7l-3.6-3.6c2-0.8 4.3-1.2 6.6-1.2 8.4 0 15.4 5.2 18.3 12.5-1.3 3.1-3.2 5.8-5.7 7.9l-4.9-4.9c0.4-0.9 0.7-1.9 0.7-3 0-4.6-3.8-8.4-8.4-8.4z' })
                )
            );
        }
    }]);

    return MdVisibilityOff;
}(React.Component);

exports.default = MdVisibilityOff;
module.exports = exports['default'];