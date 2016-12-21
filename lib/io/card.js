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

var IoCard = function (_React$Component) {
    _inherits(IoCard, _React$Component);

    function IoCard() {
        _classCallCheck(this, IoCard);

        return _possibleConstructorReturn(this, (IoCard.__proto__ || Object.getPrototypeOf(IoCard)).apply(this, arguments));
    }

    _createClass(IoCard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.8 7.5c1.3 0 2.2 0.9 2.2 2.2v20.6c0 1.3-0.9 2.2-2.2 2.2h-30.6c-1.3 0-2.2-0.9-2.2-2.2v-20.6c0-1.3 0.9-2.2 2.2-2.2h30.6z m-29.3 2.5c-0.5 0-0.9 0.4-1 0.9v1.6h30v-1.6c-0.1-0.5-0.5-0.9-1-0.9h-28z m28 20c0.5 0 0.9-0.4 1-0.9v-9.1h-30v9.1c0.1 0.5 0.5 0.9 1 0.9h28z m-26.5-5v-1.2h15v1.2h-15z m0 2.5v-1.2h7.5v1.2h-7.5z m20 0v-3.7h5v3.7h-5z' })
                )
            );
        }
    }]);

    return IoCard;
}(React.Component);

exports.default = IoCard;
module.exports = exports['default'];