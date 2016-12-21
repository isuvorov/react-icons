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

var MdRestorePage = function (_React$Component) {
    _inherits(MdRestorePage, _React$Component);

    function MdRestorePage() {
        _classCallCheck(this, MdRestorePage);

        return _possibleConstructorReturn(this, (MdRestorePage.__proto__ || Object.getPrototypeOf(MdRestorePage)).apply(this, arguments));
    }

    _createClass(MdRestorePage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 30c4.6 0 8.4-3.7 8.4-8.4s-3.8-8.2-8.4-8.2c-3 0-5.5 1.5-7 3.8l-2.1-2.2v6.6h6.6l-2.7-2.6c1-1.9 2.9-3.1 5.2-3.1 3.2 0 5.9 2.5 5.9 5.7s-2.7 5.9-5.9 5.9c-2 0-3.7-1-4.8-2.5h-2.9c1.3 3 4.3 5 7.7 5z m3.4-26.6l10 10v20c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2l0.1-26.8c0-1.8 1.5-3.2 3.3-3.2h13.4z' })
                )
            );
        }
    }]);

    return MdRestorePage;
}(React.Component);

exports.default = MdRestorePage;
module.exports = exports['default'];