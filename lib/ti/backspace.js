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

var TiBackspace = function (_React$Component) {
    _inherits(TiBackspace, _React$Component);

    function TiBackspace() {
        _classCallCheck(this, TiBackspace);

        return _possibleConstructorReturn(this, (TiBackspace.__proto__ || Object.getPrototypeOf(TiBackspace)).apply(this, arguments));
    }

    _createClass(TiBackspace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 8.3h-16.7c-2.1 0-4.7 1.4-5.9 3.1l-4.4 6.1c-1 1.5-1.9 2.7-2 2.8-0.2 0.3-0.2 0.8 0 1.1 0.1 0 1 1.3 2 2.8l4.4 6.1c1.2 1.7 3.8 3 5.9 3h16.7c2.3 0 4.2-1.8 4.2-4.1v-16.7c0-2.3-1.9-4.2-4.2-4.2z m-3.8 16.4c0.6 0.6 0.6 1.7 0 2.3-0.3 0.3-0.8 0.5-1.2 0.5s-0.9-0.2-1.2-0.5l-3.8-3.8-3.8 3.8c-0.3 0.3-0.8 0.5-1.2 0.5s-0.9-0.2-1.2-0.5c-0.6-0.6-0.6-1.7 0-2.3l3.8-3.9-3.8-3.8c-0.6-0.6-0.6-1.7 0-2.3s1.7-0.7 2.4 0l3.8 3.8 3.8-3.8c0.7-0.7 1.7-0.7 2.4 0s0.6 1.7 0 2.3l-3.8 3.8 3.8 3.9z' })
                )
            );
        }
    }]);

    return TiBackspace;
}(React.Component);

exports.default = TiBackspace;
module.exports = exports['default'];