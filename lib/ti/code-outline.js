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

var TiCodeOutline = function (_React$Component) {
    _inherits(TiCodeOutline, _React$Component);

    function TiCodeOutline() {
        _classCallCheck(this, TiCodeOutline);

        return _possibleConstructorReturn(this, (TiCodeOutline.__proto__ || Object.getPrototypeOf(TiCodeOutline)).apply(this, arguments));
    }

    _createClass(TiCodeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13 31.7c-1.3 0-2.5-0.6-3.5-1.5l-8.5-8.5 8.5-8.6c1.9-1.9 5.2-1.9 7.1 0 1.9 2 1.9 5.2 0 7.1l-1.5 1.5 1.5 1.4c1.9 2 1.9 5.2 0 7.1-1 0.9-2.2 1.5-3.6 1.5z m-7.3-10l6.2 6.1c0.6 0.7 1.7 0.7 2.3 0 0.7-0.6 0.7-1.7 0-2.3l-3.8-3.8 3.8-3.9c0.7-0.6 0.7-1.7 0-2.3-0.6-0.6-1.7-0.6-2.3 0l-6.2 6.2z m21.3 10c-1.4 0-2.6-0.6-3.6-1.5-1.9-1.9-1.9-5.1 0-7.1l1.5-1.4-1.5-1.5c-1.9-1.9-1.9-5.1 0-7.1 1.9-1.9 5.2-1.9 7.1 0l8.5 8.6-8.5 8.5c-1 0.9-2.2 1.5-3.5 1.5z m0-16.7c-0.5 0-0.9 0.2-1.2 0.5-0.7 0.6-0.7 1.7 0 2.3l3.8 3.9-3.8 3.8c-0.7 0.6-0.7 1.7 0 2.3 0.6 0.7 1.7 0.7 2.3 0l6.2-6.1-6.2-6.2c-0.3-0.3-0.7-0.5-1.1-0.5z' })
                )
            );
        }
    }]);

    return TiCodeOutline;
}(React.Component);

exports.default = TiCodeOutline;
module.exports = exports['default'];