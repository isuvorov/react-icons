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

var MdiTableColumnRemove = function (_React$Component) {
    _inherits(MdiTableColumnRemove, _React$Component);

    function MdiTableColumnRemove() {
        _classCallCheck(this, MdiTableColumnRemove);

        return _possibleConstructorReturn(this, (MdiTableColumnRemove.__proto__ || Object.getPrototypeOf(MdiTableColumnRemove)).apply(this, arguments));
    }

    _createClass(MdiTableColumnRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,2.00002L 11,2.00001C 12.1046,2.00001 13,2.89544 13,4.00001L 13,20C 13,21.1046 12.1046,22 11,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,4.00002C 2,2.89544 2.89543,2.00002 4,2.00002 Z M 4,10L 4,14L 11,14L 11,10L 4,10 Z M 4,16L 4,20L 11,20L 11,16L 4,16 Z M 4,4.00001L 4,8L 11,7.99999L 11,4L 4,4.00001 Z M 17.5858,12L 15,9.41422L 16.4142,8L 19,10.5858L 21.5858,8L 23,9.41422L 20.4142,12L 23,14.5858L 21.5858,16L 19,13.4142L 16.4142,16L 15,14.5858L 17.5858,12 Z ' })
                )
            );
        }
    }]);

    return MdiTableColumnRemove;
}(React.Component);

exports.default = MdiTableColumnRemove;
module.exports = exports['default'];