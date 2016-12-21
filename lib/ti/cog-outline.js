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

var TiCogOutline = function (_React$Component) {
    _inherits(TiCogOutline, _React$Component);

    function TiCogOutline() {
        _classCallCheck(this, TiCogOutline);

        return _possibleConstructorReturn(this, (TiCogOutline.__proto__ || Object.getPrototypeOf(TiCogOutline)).apply(this, arguments));
    }

    _createClass(TiCogOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 8.3l1.4 5.7 5.6-1.6 2.5 4.3-4.2 4.1 4.2 4.1-2.5 4.3-5.6-1.6-1.4 5.7h-5l-1.5-5.7-5.6 1.6-2.5-4.3 4.2-4.1-4.2-4.1 2.5-4.3 5.6 1.6 1.5-5.7h5z m0-3.3h-5c-1.6 0-2.9 1-3.3 2.5l-0.6 2.4-2.3-0.7c-0.3-0.1-0.6-0.1-0.9-0.1-1.2 0-2.3 0.6-2.9 1.7l-2.5 4.3c-0.8 1.3-0.5 3 0.6 4l1.7 1.7-1.7 1.7c-1.1 1.1-1.4 2.8-0.6 4.1l2.5 4.3c0.6 1.1 1.7 1.7 2.9 1.7 0.3 0 0.6-0.1 0.9-0.1l2.3-0.7 0.6 2.3c0.4 1.5 1.7 2.6 3.3 2.6h5c1.5 0 2.8-1.1 3.2-2.6l0.6-2.3 2.3 0.6c0.3 0.1 0.6 0.2 0.9 0.2 1.2 0 2.3-0.6 2.9-1.7l2.5-4.3c0.8-1.4 0.6-3-0.5-4.1l-1.8-1.7 1.8-1.7c1.1-1 1.3-2.7 0.5-4l-2.5-4.4c-0.6-1-1.7-1.6-2.9-1.6-0.3 0-0.6 0-0.9 0.1l-2.3 0.7-0.6-2.4c-0.4-1.5-1.7-2.5-3.2-2.5z m-2.5 12.5c1.8 0 3.3 1.5 3.3 3.3 0 1.9-1.5 3.4-3.3 3.4s-3.4-1.5-3.4-3.4c0-1.8 1.5-3.3 3.4-3.3z m0-1.7c-2.8 0-5 2.3-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5z' })
                )
            );
        }
    }]);

    return TiCogOutline;
}(React.Component);

exports.default = TiCogOutline;
module.exports = exports['default'];