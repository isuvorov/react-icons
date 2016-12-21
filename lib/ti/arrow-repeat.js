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

var TiArrowRepeat = function (_React$Component) {
    _inherits(TiArrowRepeat, _React$Component);

    function TiArrowRepeat() {
        _classCallCheck(this, TiArrowRepeat);

        return _possibleConstructorReturn(this, (TiArrowRepeat.__proto__ || Object.getPrototypeOf(TiArrowRepeat)).apply(this, arguments));
    }

    _createClass(TiArrowRepeat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 11.7h-3.5l2.2-2.2c0.6-0.6 0.6-1.7 0-2.3s-1.7-0.7-2.4 0l-6.2 6.1 6.2 6.2c0.3 0.3 0.8 0.5 1.2 0.5s0.9-0.2 1.2-0.5c0.6-0.6 0.6-1.7 0-2.3l-2.2-2.2h3.5c2.3 0 4.2 2.2 4.2 5s-2.3 5-5 5c-1 0-1.7 0.7-1.7 1.7s0.7 1.6 1.7 1.6c4.6 0 8.3-3.7 8.3-8.3s-3.4-8.3-7.5-8.3z m-13.7 8.8c-0.6 0.6-0.6 1.7 0 2.3l2.2 2.2h-3.5c-2.3 0-4.2-2.2-4.2-5s2.3-5 5-5c1 0 1.7-0.7 1.7-1.7s-0.7-1.6-1.7-1.6c-4.6 0-8.3 3.7-8.3 8.3s3.4 8.3 7.5 8.3h3.5l-2.2 2.2c-0.6 0.6-0.6 1.7 0 2.3 0.3 0.4 0.8 0.5 1.2 0.5s0.9-0.1 1.2-0.5l6.2-6.1-6.2-6.2c-0.7-0.7-1.7-0.7-2.4 0z' })
                )
            );
        }
    }]);

    return TiArrowRepeat;
}(React.Component);

exports.default = TiArrowRepeat;
module.exports = exports['default'];