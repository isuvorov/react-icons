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

var TiInfoLargeOutline = function (_React$Component) {
    _inherits(TiInfoLargeOutline, _React$Component);

    function TiInfoLargeOutline() {
        _classCallCheck(this, TiInfoLargeOutline);

        return _possibleConstructorReturn(this, (TiInfoLargeOutline.__proto__ || Object.getPrototypeOf(TiInfoLargeOutline)).apply(this, arguments));
    }

    _createClass(TiInfoLargeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.7 26.7l0.9-1.8c1.4-2.7 1.5-5.4 0.5-7.6-0.2-0.5-0.5-0.8-0.8-1.2 2.4-1 4-3.4 4-6.1 0-3.7-3-6.7-6.6-6.7s-6.7 3-6.7 6.7c0 1.3 0.4 2.5 1 3.5-2.8 0.6-4.6 2.1-4.9 2.3-1.2 1.1-1.4 2.8-0.6 4.2 0.5 0.9 1.4 1.5 2.4 1.6l-0.9 1.9c-1.3 2.7-1.5 5.4-0.4 7.6 0.9 1.9 2.7 3.2 4.9 3.7 0.7 0.1 1.4 0.2 2.1 0.2 4 0 6.6-2.3 6.9-2.5 1.2-1.1 1.5-2.8 0.7-4.2-0.5-0.9-1.5-1.5-2.5-1.6z m-2-20c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3c-1.9 0-3.4-1.5-3.4-3.3s1.5-3.3 3.4-3.3z m-3.1 25c-0.4 0-0.9-0.1-1.4-0.2-2.7-0.5-3.9-3.2-2.2-6.5l1.7-3.3c0.8-1.7 0.8-2.8-0.2-3.4-0.3-0.2-0.7-0.3-1.2-0.3-0.9 0-2 0.3-2 0.3s1.9-1.6 4.7-1.6c0.5 0 1 0 1.5 0.1 2.7 0.6 3.8 3.2 2.2 6.6l-1.7 3.3c-0.8 1.6-0.8 2.7 0.2 3.4 0.3 0.2 0.7 0.3 1.1 0.3 1 0 2-0.4 2-0.4s-1.9 1.7-4.7 1.7z' })
                )
            );
        }
    }]);

    return TiInfoLargeOutline;
}(React.Component);

exports.default = TiInfoLargeOutline;
module.exports = exports['default'];