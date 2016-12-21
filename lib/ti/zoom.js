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

var TiZoom = function (_React$Component) {
    _inherits(TiZoom, _React$Component);

    function TiZoom() {
        _classCallCheck(this, TiZoom);

        return _possibleConstructorReturn(this, (TiZoom.__proto__ || Object.getPrototypeOf(TiZoom)).apply(this, arguments));
    }

    _createClass(TiZoom, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 6.7c-6.5 0-11.7 5.2-11.7 11.6 0 1.3 0.2 2.5 0.6 3.7l-2.1 2.1-1.7 1.7c-0.9 0.9-1.5 2.3-1.5 3.7 0 2.8 2.4 5.2 5.2 5.2 1.3 0 2.5-0.5 3.5-1.3l0.2-0.1 0.1-0.1 3.7-3.8c1.2 0.4 2.4 0.6 3.7 0.6 6.4 0 11.6-5.2 11.6-11.7s-5.2-11.6-11.6-11.6z m0 20c-4.6 0-8.4-3.8-8.4-8.4s3.8-8.3 8.4-8.3 8.3 3.7 8.3 8.3-3.7 8.4-8.3 8.4z m0-15c-3.7 0-6.7 3-6.7 6.6s3 6.7 6.7 6.7 6.6-3 6.6-6.7-3-6.6-6.6-6.6z m0 11.6c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.3 5 5-2.3 5-5 5z' })
                )
            );
        }
    }]);

    return TiZoom;
}(React.Component);

exports.default = TiZoom;
module.exports = exports['default'];