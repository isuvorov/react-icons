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

var TiPuzzle = function (_React$Component) {
    _inherits(TiPuzzle, _React$Component);

    function TiPuzzle() {
        _classCallCheck(this, TiPuzzle);

        return _possibleConstructorReturn(this, (TiPuzzle.__proto__ || Object.getPrototypeOf(TiPuzzle)).apply(this, arguments));
    }

    _createClass(TiPuzzle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.1 18.8c0.6 0 1.2 0.2 1.6 0.6 0.9 0.6 1.3-0.1 1.3-0.6v-3c0-1.3-1.1-2.5-2.5-2.5h-4.6c-0.6 0-1.2-0.3-0.6-1.2 0.4-0.5 0.6-1.1 0.6-1.7 0-1.6-1.7-2.9-3.7-2.9s-3.8 1.3-3.8 2.9c0 0.5 0.2 1 0.4 1.4 0.9 1.1 0.3 1.5-0.4 1.5h-4.6c-1.3 0-2.5 1.2-2.5 2.5v2.9c0 0.7 0.5 1.3 1.6 0.5 0.4-0.3 0.9-0.5 1.4-0.5 1.6 0 2.9 1.7 2.9 3.8s-1.3 3.7-2.9 3.7c-0.7 0-1.2-0.2-1.7-0.6-0.9-0.6-1.3 0.1-1.3 0.6v4.6c0 1.4 1.2 2.5 2.5 2.5h4.6c0.7 0 1.3-0.4 0.4-1.5-0.2-0.4-0.4-0.9-0.4-1.4 0-1.6 1.7-2.9 3.8-2.9s3.7 1.3 3.7 2.9c0 0.6-0.2 1.2-0.6 1.7-0.6 0.9 0 1.2 0.6 1.2h4.6c1.4 0 2.5-1.1 2.5-2.5v-4.5c0-0.7-0.4-1.3-1.5-0.5-0.5 0.3-0.9 0.5-1.4 0.5-1.6 0-2.9-1.7-2.9-3.8s1.3-3.7 2.9-3.7z' })
                )
            );
        }
    }]);

    return TiPuzzle;
}(React.Component);

exports.default = TiPuzzle;
module.exports = exports['default'];