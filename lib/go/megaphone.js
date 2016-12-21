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

var GoMegaphone = function (_React$Component) {
    _inherits(GoMegaphone, _React$Component);

    function GoMegaphone() {
        _classCallCheck(this, GoMegaphone);

        return _possibleConstructorReturn(this, (GoMegaphone.__proto__ || Object.getPrototypeOf(GoMegaphone)).apply(this, arguments));
    }

    _createClass(GoMegaphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 1.3c-5.1 0-4.8 5-27.5 5-2.8 0-5 4.4-5 10s2.2 10 5 10c0.9 0 1.7 0 2.5 0l2.5 11.2 7.5 1.3 2.5-3.8-1.8-7.9c9.5 1.4 10.5 4.2 14.3 4.2 4.1 0 7.5-6.8 7.5-15 0-8.3-3.4-15-7.5-15z m-24.8 17.6c-1.5-0.1-3.2-0.1-5-0.1-0.1-0.8-0.2-1.7-0.2-2.6 0-3.4 1.1-7.5 2.5-7.5 1.5 0.1 2.9 0 4.3 0-1.1 1.8-1.8 4.5-1.8 7.6 0 0.9 0.1 1.7 0.2 2.6z m2.5 0.1c-0.1-0.9-0.2-1.8-0.2-2.7 0-3.2 0.7-5.9 1.8-7.7 6.1-0.3 9.9-1.1 12.5-2-1.1 2.6-1.8 6-1.8 9.7 0 1.5 0.1 3 0.4 4.4-2.8-0.7-6.8-1.4-12.7-1.7z m22.3 8.5c-0.5 0-0.9-0.2-1.4-0.5-0.6-2.6-3.2-16.3 4.6-19.3 1.1 2.1 1.8 5.1 1.8 8.6 0 6.2-2.2 11.2-5 11.2z' })
                )
            );
        }
    }]);

    return GoMegaphone;
}(React.Component);

exports.default = GoMegaphone;
module.exports = exports['default'];