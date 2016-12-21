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

var IoPaintbucket = function (_React$Component) {
    _inherits(IoPaintbucket, _React$Component);

    function IoPaintbucket() {
        _classCallCheck(this, IoPaintbucket);

        return _possibleConstructorReturn(this, (IoPaintbucket.__proto__ || Object.getPrototypeOf(IoPaintbucket)).apply(this, arguments));
    }

    _createClass(IoPaintbucket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.8 5l2.5-2.5 21.4 21.6-4.5 0.9-12.7 12.5-15.5-15 11.9-11.9z m15.3 17.5l-8.6-8.6-8.5 8.6h17.1z m8.6 1.6s4.8 5.1 4.8 7.7-2.1 4.7-4.8 4.7-4.7-2.1-4.7-4.7 4.7-7.7 4.7-7.7z' })
                )
            );
        }
    }]);

    return IoPaintbucket;
}(React.Component);

exports.default = IoPaintbucket;
module.exports = exports['default'];