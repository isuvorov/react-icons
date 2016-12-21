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

var MdVisibility = function (_React$Component) {
    _inherits(MdVisibility, _React$Component);

    function MdVisibility() {
        _classCallCheck(this, MdVisibility);

        return _possibleConstructorReturn(this, (MdVisibility.__proto__ || Object.getPrototypeOf(MdVisibility)).apply(this, arguments));
    }

    _createClass(MdVisibility, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15c2.7 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m0 13.4c4.6 0 8.4-3.8 8.4-8.4s-3.8-8.4-8.4-8.4-8.4 3.8-8.4 8.4 3.8 8.4 8.4 8.4z m0-20.9c8.4 0 15.5 5.2 18.4 12.5-2.9 7.3-10 12.5-18.4 12.5s-15.5-5.2-18.4-12.5c2.9-7.3 10-12.5 18.4-12.5z' })
                )
            );
        }
    }]);

    return MdVisibility;
}(React.Component);

exports.default = MdVisibility;
module.exports = exports['default'];