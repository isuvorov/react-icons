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

var TiBusinessCard = function (_React$Component) {
    _inherits(TiBusinessCard, _React$Component);

    function TiBusinessCard() {
        _classCallCheck(this, TiBusinessCard);

        return _possibleConstructorReturn(this, (TiBusinessCard.__proto__ || Object.getPrototypeOf(TiBusinessCard)).apply(this, arguments));
    }

    _createClass(TiBusinessCard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.3 33.3h-26.6c-2.8 0-5-2.2-5-5v-16.6c0-2.8 2.2-5 5-5h26.6c2.8 0 5 2.2 5 5v16.6c0 2.8-2.2 5-5 5z m-26.6-23.3c-0.9 0-1.7 0.7-1.7 1.7v16.6c0 1 0.7 1.7 1.7 1.7h26.6c1 0 1.7-0.7 1.7-1.7v-16.6c0-0.9-0.7-1.7-1.7-1.7h-26.6z m10 15h-6.7c-0.9 0-1.7-0.7-1.7-1.7s0.8-1.6 1.7-1.6h6.7c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7z m0-6.7h-6.7c-0.9 0-1.7-0.7-1.7-1.6s0.8-1.7 1.7-1.7h6.7c0.9 0 1.6 0.7 1.6 1.7s-0.7 1.6-1.6 1.6z m13.3-0.8c0 1.8-1.5 3.3-3.3 3.3s-3.4-1.5-3.4-3.3c0-1.8 1.5-3.3 3.4-3.3s3.3 1.5 3.3 3.3z m-3.3 4.8c-2.6 0-4.2 1.2-4.2 2.3 0 0.6 1.6 1.2 4.2 1.2 2.4 0 4.1-0.6 4.1-1.2 0-1.1-1.6-2.3-4.1-2.3z' })
                )
            );
        }
    }]);

    return TiBusinessCard;
}(React.Component);

exports.default = TiBusinessCard;
module.exports = exports['default'];