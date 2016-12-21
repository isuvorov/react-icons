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

var TiEject = function (_React$Component) {
    _inherits(TiEject, _React$Component);

    function TiEject() {
        _classCallCheck(this, TiEject);

        return _possibleConstructorReturn(this, (TiEject.__proto__ || Object.getPrototypeOf(TiEject)).apply(this, arguments));
    }

    _createClass(TiEject, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 29.2c-4.2 0-7.5-3.4-7.5-7.5 0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7c0 5.9 4.9 10.8 10.9 10.8s10.8-4.9 10.8-10.8-4.9-10.9-10.8-10.9c-1 0-1.7 0.8-1.7 1.7s0.7 1.7 1.7 1.7c4.1 0 7.5 3.3 7.5 7.5s-3.4 7.5-7.5 7.5z m-3.9-22.5c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7h-5.4l9.6 9.7c0.7 0.6 0.7 1.7 0 2.3-0.3 0.3-0.7 0.5-1.2 0.5s-0.8-0.2-1.1-0.5l-9.7-9.6v5.4c0 0.9-0.7 1.6-1.7 1.6s-1.6-0.7-1.6-1.6v-11.1h11.1z' })
                )
            );
        }
    }]);

    return TiEject;
}(React.Component);

exports.default = TiEject;
module.exports = exports['default'];