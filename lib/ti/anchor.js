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

var TiAnchor = function (_React$Component) {
    _inherits(TiAnchor, _React$Component);

    function TiAnchor() {
        _classCallCheck(this, TiAnchor);

        return _possibleConstructorReturn(this, (TiAnchor.__proto__ || Object.getPrototypeOf(TiAnchor)).apply(this, arguments));
    }

    _createClass(TiAnchor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 22.5c-0.9 0-1.7 0.7-1.7 1.7 0 4-2.8 7.4-6.6 8.1v-12.3h6.6c1 0 1.7-0.7 1.7-1.7s-0.7-1.6-1.7-1.6h-6.6v-2c1.9-0.7 3.3-2.5 3.3-4.7 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 2.2 1.4 4 3.3 4.7v2h-6.6c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7h6.6v12.3c-3.8-0.7-6.6-4.1-6.6-8.1 0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7c0 6.4 5.3 11.6 11.7 11.6s11.7-5.2 11.7-11.6c0-1-0.8-1.7-1.7-1.7z m-10-14.2c0.9 0 1.7 0.8 1.7 1.7s-0.8 1.7-1.7 1.7-1.7-0.8-1.7-1.7 0.8-1.7 1.7-1.7z' })
                )
            );
        }
    }]);

    return TiAnchor;
}(React.Component);

exports.default = TiAnchor;
module.exports = exports['default'];